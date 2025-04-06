<?php

namespace App\Http\Controllers;

use App\Models\PageContent;
use Illuminate\Http\Request;

class PageContentController extends Controller
{
    /**
     * Récupérer le contenu d'une page par son nom
     */
    public function show($pageName)
    {
        $pageContent = PageContent::where('page_name', $pageName)->firstOrFail();
        return response()->json($pageContent);
    }

    /**
     * Récupérer le contenu de toutes les pages
     */
    public function index()
    {
        $pageContents = PageContent::all();
        return response()->json($pageContents);
    }

    /**
     * Créer un nouveau contenu de page
     */
    public function store(Request $request)
    {
        $request->validate([
            'page_name' => 'required|string|max:255|unique:page_contents',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'meta_data' => 'nullable|array',
        ]);

        $pageContent = PageContent::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Contenu de page créé avec succès',
            'data' => $pageContent
        ], 201);
    }

    /**
     * Mettre à jour le contenu d'une page
     */
    public function update(Request $request, $id)
    {
        $pageContent = PageContent::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'meta_data' => 'nullable|array',
        ]);

        $pageContent->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Contenu de page mis à jour avec succès',
            'data' => $pageContent
        ]);
    }

    /**
     * Supprimer le contenu d'une page
     */
    public function destroy($id)
    {
        $pageContent = PageContent::findOrFail($id);
        $pageContent->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Contenu de page supprimé avec succès'
        ]);
    }
}
