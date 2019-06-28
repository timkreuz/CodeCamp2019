

## Setup for Code Camp:


# A Computer with a Browser.  Prefer Chrome.

# Visual Studio Code installed.

    https://code.visualstudio.com/

# Install HTTP Server:

    This is needed to get around some CORS issues in Chrome when using modules in javascript.

    https://www.npmjs.com/package/http-server

    At the command prompt run this:
    npm install http-server -g

    Then in the directory of your web project run this:
    http-server


## Code Camp - UFO Attack Challenges

    Game conditions.  
    The Aliens win if they:
        (a) Destroy the defense system with the abduction beam.
        (b) Land 10 visitors on earth.
    Once they land 10 visitors, they can colonize and take over our planet.  
    The Earthlings win if they can destroy the UFO.  
    The UFO will start with 5 life points.  
    It loses a life point each time it gets hit with a missile.
    It gains a life point each time it successfully abducts a small animal.
    The abduction beam destroys the defense system.
    

    00 - All is calm.  Nice night sky over the green earth.
    01 - Draw the UFO. It won't move yet.
    02 - Cuustomize the UFO. Change it's size, color, starting position.
    02 - Make the UFO Fly. Off the screen...
    03 - The UFO can reverse itself and move back the other way.  Bouncing back and forth.  Nice.
    04 - Randomize UFO movements.  Aliens like to jump around. 
    05 - Set up abduction events.  The UFO will pause before starting an abduction.    
    06 - Sending down the abduction beam.  Cool! 
    07 - Say good-bye to a cat or a chicken.  Sad.
    08 - Set up a defense system.  Finally! 
    09 - Make it move left and right.  Using keyboard events.  
    10 - Generate an abduction shield.  Wow.  I wish it would actually work...
    11 - Where the shield actually blocks the abduction beam.  The cats and chickens are happy.
    12 - Aliens begin to invade the earth. - More than one step here. 
    13 - The defense system needs to stop the invasion.  Missiles.  We can use these against the UFO too.
    14 - How about if the missiles actually damaged sommething they hit.  
    15 - The aliens implement missile detection.  
    16 - The aliens create decoys.
    17 - Exploding chicken technology.    
