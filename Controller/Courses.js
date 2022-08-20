const courses = require('../Models/Courses');



exports.getallCourses = ((req, res) => {
    courses.find().then(data => {
        const dataLength = data.length;
        res.json( {
            message: "Course list fatched",
            count: dataLength,
            Courses: data
        });
    }).catch(err => {
        res.json({ error: err });
    })
});


exports.getCoursesbyname = (req, res) => {
    const courseName = req.params.courseName;
    courses.find({ name: courseName }).then(data => {
        res.json({ data });
    }).catch(err => {
        res.json({ error: err });
    })
}

// exports.acceptBooking = (req, res) => {
//     const orderId = req.params.orderId;
//     order.updateOne(
//         { orderId: orderId },
//         { "confirmBooking": "Accepted" },
//         (err,ress)=>{
//             if(err) {
//                 res.json({
//                     error:err
//                 });
//             }else{
//                 res.json({
//                     message:"One document updated!"
//                 });
//             }
            

//         }
//     )
// }

// exports.denyBooking = (req, res) => {
//     const orderId = req.params.orderId;
//     order.updateOne(
//         { orderId: orderId },
//         { "confirmBooking": "deny" },
//         (err,ress)=>{
//             if(err) {
//                 res.json({
//                     error:err
//                 });
//             }else{
//                 res.json({
//                     message:"One document updated!"
//                 });
//             }
            

        // }
    // )
// }