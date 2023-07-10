// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
    if (nums.length == 2) {
        let sum = nums[0] + nums[1];
        if (sum == target) {
            return [0, 1];
        }
    } else {
        let res = [];
        nums.forEach((item, i, arr) => {
            console.log(i);
            nums.forEach((ent, j, arr2) => {
                let sum = arr2[j + 1] + arr[i];
                console.log(arr2.indexOf(arr2[j + 1]), arr.indexOf(arr[i]));

                if (sum == target) {

                    res = [arr2.indexOf(arr2[j + 1]), arr.indexOf(arr[i])];
                }
            });
        })
        return res;
    }

};

console.log(twoSum([3, 2, 3], 6));

// let originalArray = [
//     {
//         "review_id": 48648,
//         "pid": 40,
//         "review_title": "Great product and wonderful",
//         "review": "Great product and wonderful",
//         "star_count": 5,
//         "cust_name": "Akshay Surve",
//         "cust_email": "akshaysurveug@gmail.com",
//         "shopify_cust_id": null,
//         "cust_location": "Pune, Maharashtra",
//         "status": 0,
//         "admin_reply": "",
//         "created_at": "07-14-2021 11:36:27",
//         "updated_at": "",
//         "product_name": "Urbangabru Acne Pimple Patch",
//         "file_id": 175,
//         "file_type": "image",
//         "file_path": "http://localhost:4500/public/product_review/images/48648/7dde06bb1f3fb2261d50e143cd2f17cf.png"
//     },
//     {
//         "review_id": 48647,
//         "pid": 40,
//         "review_title": "Great product and wonderful",
//         "review": "Great product and wonderful",
//         "star_count": 5,
//         "cust_name": "Akshay Surve",
//         "cust_email": "akshaysurveug@gmail.com",
//         "shopify_cust_id": null,
//         "cust_location": "Pune, Maharashtra",
//         "status": 0,
//         "admin_reply": "",
//         "created_at": "07-14-2021 11:36:22",
//         "updated_at": "",
//         "product_name": "Urbangabru Acne Pimple Patch",
//         "file_id": 174,
//         "file_type": "image",
//         "file_path": "http://localhost:4500/public/product_review/images/48647/267434.jpg"
//     },
//     {
//         "review_id": 48647,
//         "pid": 40,
//         "review_title": "Great product and wonderful",
//         "review": "Great product and wonderful",
//         "star_count": 5,
//         "cust_name": "Akshay Surve",
//         "cust_email": "akshaysurveug@gmail.com",
//         "shopify_cust_id": null,
//         "cust_location": "Pune, Maharashtra",
//         "status": 0,
//         "admin_reply": "",
//         "created_at": "07-14-2021 11:36:22",
//         "updated_at": "",
//         "product_name": "Urbangabru Acne Pimple Patch",
//         "file_id": 173,
//         "file_type": "image",
//         "file_path": "http://localhost:4500/public/product_review/images/48647/164-1642748_wood-table-top-background-andifurniture-download-wallpaper-furniture.jpg"
//     },
//     {
//         "review_id": 48647,
//         "pid": 40,
//         "review_title": "Great product and wonderful",
//         "review": "Great product and wonderful",
//         "star_count": 5,
//         "cust_name": "Akshay Surve",
//         "cust_email": "akshaysurveug@gmail.com",
//         "shopify_cust_id": null,
//         "cust_location": "Pune, Maharashtra",
//         "status": 0,
//         "admin_reply": "",
//         "created_at": "07-14-2021 11:36:22",
//         "updated_at": "",
//         "product_name": "Urbangabru Acne Pimple Patch",
//         "file_id": 172,
//         "file_type": "image",
//         "file_path": "http://localhost:4500/public/product_review/images/48647/7dde06bb1f3fb2261d50e143cd2f17cf.png"
//     }]

// var newArray = [];
// originalArray.forEach(item => {
//     var newItem = { review_id: item.review_id, data: [] };
//     originalArray.forEach(innerItem => {
//         if (innerItem.file_id == item.file_id) {
//             newItem.data = newItem.data.concat({
//                 "file_path": innerItem.file_path,
//                 "file_id":innerItem.file_id
//             });
//         }
//     });
//     newArray.push(newItem);
// });

//   const arrayHashmap = newArray.reduce((obj, item) => {
//     obj[item.review_id] ? obj[item.review_id].data.push(...item.data) : (obj[item.review_id] = { ...item });
//     return obj;
//   }, {});
//   console.log(arrayHashmap);
//   const mergedArray = Object.values(arrayHashmap);
//   console.log(mergedArray);

//   let str = 'kjfksdfkdfksdfko3roew 123';
//   console.log(str.split(''));
//   console.log(Object.values('kjfksdfkdfksdfko3roew 123'));


