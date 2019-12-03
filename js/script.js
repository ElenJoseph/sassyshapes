const colors = ['red', 'blue', 'green', 'purple', 'orange']
const shapes = ['square', 'circle', 'pentagon', 'hexagon', 'octagon']

const shapeColor = []
const $shapes = document.getElementById('shapes')

for (const shape of shapes){
    for (const color of colors){
        shapeColor.push(`<div class="${shape}-${color}"></div>`)
    }
}

$shapes.innerHTML = shapeColor.join('')
