const mongoose = require('mongoose');
const schema = mongoose.Schema;
const coursesSchema = new schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
    },
    des: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
   
    eligibility: {
        type: String,
        required: true
    },
    syllabus: {
        type: Array,
        required: true
    },
    syllabusOpportunities: {
        type: Array,
        required: true
    },
    syllabusImage: {
        type: Array,
        required: true
    }
});
module.exports = mongoose.model("courses", coursesSchema, "courses");
