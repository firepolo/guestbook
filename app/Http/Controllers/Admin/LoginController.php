<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credential = $request->only(['email', 'password']);

        if (Auth::attempt($credential)) {
            return response()->json(null, 200);
        }

        return response()->json(null, 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(null, 200);
    }
}
