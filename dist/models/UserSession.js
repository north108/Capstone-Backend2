const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: -1
    },
    isDeleted: {
        type: Boolean,
        defualt: false
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('UserSession', UserSessionSchema);
//# sourceMappingURL=UserSession.js.map