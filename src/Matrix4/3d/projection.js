// 一点透视
// 物体限制在四棱锥中
var _perspective_projection = function (
    // 垂直视角
    // 也就是视野的顶面和底面夹角
    fov,
    // 视野的宽/高
    aspect,
    // 近裁剪面和远裁剪面
    near, far
) {
    return [

    ];
};

// 正交投影
// 投影向量和观察平面垂直
// 物体坐标沿观察坐标系的z轴平行投影到观察平面上
// 观察点和观察平面间的距离不会影响物体的投影大小
// 取景范围是一个长方体
// 只有在这个长方体中的景物才会被绘制出来
var _orthogonal_projection = function (
    // 裁剪面边界
    left, right, top, bottom,
    // 近裁剪面和远裁剪面
    near, far
) {
    return [
        2 / (right - left), 0, 0, 0,
        0, 2 / (top - bottom), 0, 0,
        0, 0, 1 / (far - near), 0,
        -(right + left) / (right - left),
        -(top + bottom) / (top - bottom),
        -near / (far - near),
        1
    ];
};

// 投影
// https://www.codeguru.com/cpp/misc/misc/graphics/article.php/c10123/Deriving-Projection-Matrices.htm
clay.projection = function () {

};
