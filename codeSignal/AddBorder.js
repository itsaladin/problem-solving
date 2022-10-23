function solution(picture) {
    picture = picture.map(v=>`*${v}*`)
    var l = picture[0].length;
    picture.unshift(Array(l).fill('*').join(''));
    picture.push(Array(l).fill('*').join(''))
    return picture;
}
