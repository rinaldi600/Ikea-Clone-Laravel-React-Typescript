<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IkeaCloneController extends Controller
{
    public function index() {
        return Inertia::render(
            'Home/Home'
        );
    }

    public function login() {
        return Inertia::render(
            'Login/Login'
        );
    }
}
