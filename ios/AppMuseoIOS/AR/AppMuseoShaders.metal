#include <metal_stdlib>
#include <RealityKit/RealityKit.h>

using namespace metal;

[[visible]]
void appMuseoSliceSurface(realitykit::surface_parameters params)
{
    const float sliceX = params.uniforms().custom_parameter()[0];
    const float localX = params.geometry().model_position().x;
    if (localX < sliceX) {
        discard_fragment();
        return;
    }

    const half4 baseColor = params.material_constants().base_color_tint();
    params.surface().set_base_color(baseColor.rgb);
    params.surface().set_opacity(baseColor.a);
    params.surface().set_roughness(params.material_constants().roughness());
    params.surface().set_metallic(params.material_constants().metallic());
}
