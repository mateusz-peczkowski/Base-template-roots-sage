<?php

namespace App\Controllers;

use Sober\Controller\Controller;
//
use App\Services\MobileDetect;

class App extends Controller
{
    private static $detect;
    private static $usedNames;

    public function __construct()
    {
        self::$detect = new mobileDetect;
        self::$usedNames = [];
    }

    /**
     * Detect mobile environment
     */
    public static function isMobile()
    {
        return self::$detect->isMobile();
    }

    /**
     * Detect tablet environment
     */
    public static function isTablet()
    {
        return self::$detect->isTablet();
    }

    /**
     * Detect tablet phone
     */
    public static function isPhone()
    {
        return self::isMobile() && !self::isTablet();
    }
}
