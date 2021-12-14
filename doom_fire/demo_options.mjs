//----------------------------------------------------------------------------//
//                        _      _                 _   _                      //
//                       | |    | |               | | | |                     //
//                    ___| |_ __| |_ __ ___   __ _| |_| |_                    //
//                   / __| __/ _` | '_ ` _ \ / _` | __| __|                   //
//                   \__ \ || (_| | | | | | | (_| | |_| |_                    //
//                   |___/\__\__,_|_| |_| |_|\__,_|\__|\__|                   //
//                                                                            //
//                                                                            //
//  File      : demo_options.mjs                                              //
//  Project   : doom_fire                                                     //
//  Date      : 14 Dec, 21                                                    //
//  License   : GPLv3                                                         //
//  Author    : stdmatt <stdmatt@pixelwizards.io>                             //
//  Copyright : stdmatt - 2021                                                //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//

//----------------------------------------------------------------------------//
// Imports                                                                    //
//----------------------------------------------------------------------------//
//------------------------------------------------------------------------------
import { luna } from "../libs/ark_luna/luna/luna.mjs";

export class Demo_Options
{
    //------------------------------------------------------------------------//
    // Constants                                                              //
    //------------------------------------------------------------------------//
    //--------------------------------------------------------------------------
    static FIRE_WIDTH  = 320;
    static FIRE_HEIGHT = 168;
    static DESIGN_SIZE = luna.make_size(Demo_Options.FIRE_WIDTH, Demo_Options.FIRE_HEIGHT)

    //------------------------------------------------------------------------//
    // Globals                                                                //
    //------------------------------------------------------------------------//
    //--------------------------------------------------------------------------
    static scale_policy = luna.Scale_Utils.POLICY_EXACT_FIT;
}