#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


mat2 rotate2D(float r) {
    return mat2(cos(r), sin(r), -sin(r), cos(r));
}

// based on the follow tweet:
// https://twitter.com/zozuar/status/1621229990267310081
void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (gl_FragCoord.xy-.5*resolution.xy)/resolution.y;
    vec3 col = vec3(0);
    float t = time;
    vec2 umouse = (mouse / resolution) -0.5;
    vec2 n = vec2(0);
    vec2 q = vec2(0);
    vec2 p = uv;
    //p.y += sin(t*0.3+p.x*.4)*0.1;
    float d = dot(p,p);
    float S = 16.;
    float a = 0.0;
    mat2 m = rotate2D(p.x*0.1+length(p)*0.2+0.5);

    for (float j = 0.; j < 9.; j++) {

        p *= m;
        n *= m;
        q = (p * S + t * 0.6 + sin(t * 0.25 - d * 4.0) * 4.0 + j + a - n);// wtf???
        a += dot(cos(q)/S, vec2(0.4));
        n -= sin(q);
        S *= 1.4 ;
        m=m*1.05;
    }

    col = vec3(.5, .5, .5) * (((a*3.0)+0.2 ) + a + a - d);


    // Output to screen
    gl_FragColor = vec4(col,1.0);
}
