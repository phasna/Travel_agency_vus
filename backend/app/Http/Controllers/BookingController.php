<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $bookings = Booking::with('destination')
            ->where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $bookings
        ]);
    }

    public function store(Request $request)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after:startDate',
            'adults' => 'required|integer|min:1|max:10',
            'children' => 'required|integer|min:0|max:10',
            'insurance' => 'required|boolean',
            'transfer' => 'required|boolean',
            'guide' => 'required|boolean',
            'destinationId' => 'required|exists:destinations,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        // Récupérer la destination
        $destination = Destination::findOrFail($request->destinationId);

        // Calculer le prix total
        $basePrice = $destination->price * ($request->adults + $request->children);
        $insurancePrice = $request->insurance ? 49 * ($request->adults + $request->children) : 0;
        $transferPrice = $request->transfer ? 29 * 2 : 0; // Aller-retour
        $guidePrice = $request->guide ? 99 : 0;
        $totalPrice = $basePrice + $insurancePrice + $transferPrice + $guidePrice;

        // Créer la réservation
        $booking = Booking::create([
            'user_id' => 1, // Temporairement fixé à 1, à remplacer par l'ID de l'utilisateur connecté
            'destination_id' => $request->destinationId,
            'number_of_seats' => $request->adults + $request->children,
            'total_price' => $totalPrice,
            'status' => 'pending',
            'additional_info' => [
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'phone' => $request->phone,
                'startDate' => $request->startDate,
                'endDate' => $request->endDate,
                'adults' => $request->adults,
                'children' => $request->children,
                'insurance' => $request->insurance,
                'transfer' => $request->transfer,
                'guide' => $request->guide,
            ],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Réservation créée avec succès',
            'data' => $booking
        ], 201);
    }

    public function show($id)
    {
        $booking = Booking::with('destination')->findOrFail($id);
        return response()->json($booking);
    }
}
