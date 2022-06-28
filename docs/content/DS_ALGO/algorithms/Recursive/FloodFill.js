/**
 * Flood fill.
 *
 * Flood fill, also called seed fill, is an algorithm that determines and alters the area connected to a given node in a
 * multi-dimensional array with some matching attribute. It is used in the "bucket" fill tool of paint programs to fill
 * connected, similarly-colored areas with a different color.
 *
 * (description adapted from https://en.wikipedia.org/wiki/Flood_fill)
 * @see https://www.techiedelight.com/flood-fill-algorithm/
 */

const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];

/**
 * Implements the flood fill algorithm through a breadth-first approach using a queue.
 *
 * @param rgbData The image to which the algorithm is applied.
 * @param location The start location on the image.
 * @param targetColor The old color to be replaced.
 * @param replacementColor The new color to replace the old one.
 */
export function breadthFirstSearch(rgbData, location, targetColor, replacementColor) {
    if (location[0] < 0 || location[0] >= rgbData.length || location[1] < 0 || location[1] >= rgbData[0].length) {
        throw new Error('location should point to a pixel within the rgbData');
    }

    const queue = [];
    queue.push(location);

    while (queue.length > 0) {
        breadthFirstFill(rgbData, location, targetColor, replacementColor, queue);
    }
}

/**
 * Implements the flood fill algorithm through a depth-first approach using recursion.
 *
 * @param rgbData The image to which the algorithm is applied.
 * @param location The start location on the image.
 * @param targetColor The old color to be replaced.
 * @param replacementColor The new color to replace the old one.
 */
export function depthFirstSearch(rgbData, location, targetColor, replacementColor) {
    if (location[0] < 0 || location[0] >= rgbData.length || location[1] < 0 || location[1] >= rgbData[0].length) {
        throw new Error('location should point to a pixel within the rgbData');
    }

    depthFirstFill(rgbData, location, targetColor, replacementColor);
}

/**
 * Utility-function to implement the breadth-first loop.
 *
 * @param rgbData The image to which the algorithm is applied.
 * @param location The start location on the image.
 * @param targetColor The old color to be replaced.
 * @param replacementColor The new color to replace the old one.
 * @param queue The locations that still need to be visited.
 */
function breadthFirstFill(rgbData, location, targetColor, replacementColor, queue) {
    const currentLocation = queue[0];
    queue.shift();

    if (rgbData[currentLocation[0]][currentLocation[1]] === targetColor) {
        rgbData[currentLocation[0]][currentLocation[1]] = replacementColor;

        for (let i = 0; i < neighbors.length; i++) {
            const x = currentLocation[0] + neighbors[i][0];
            const y = currentLocation[1] + neighbors[i][1];
            if (x >= 0 && x < rgbData.length && y >= 0 && y < rgbData[0].length) {
                queue.push([x, y]);
            }
        }
    }
}

/**
 * Utility-function to implement the depth-first loop.
 *
 * @param rgbData The image to which the algorithm is applied.
 * @param location The start location on the image.
 * @param targetColor The old color to be replaced.
 * @param replacementColor The new color to replace the old one.
 */
function depthFirstFill(rgbData, location, targetColor, replacementColor) {
    if (rgbData[location[0]][location[1]] === targetColor) {
        rgbData[location[0]][location[1]] = replacementColor;

        for (let i = 0; i < neighbors.length; i++) {
            const x = location[0] + neighbors[i][0];
            const y = location[1] + neighbors[i][1];
            if (x >= 0 && x < rgbData.length && y >= 0 && y < rgbData[0].length) {
                depthFirstFill(rgbData, [x, y], targetColor, replacementColor);
            }
        }
    }
}
