/* Grasshopper - Array Mean 
Find the mean/average of a list of numbers in an array */

var findAverage = function (nums) {
    var sum=0;
    for (var i in nums) {
      sum += nums[i] ;
    }
    var average = sum/nums.length
    return average
  }

//other solutions:
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

/*Volume of a cuboid*/
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length*width*height
    }
  }