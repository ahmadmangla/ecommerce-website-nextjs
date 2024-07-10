import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']},
    password: { 
        type: String,
        validiate: {
        validator: function (v: string) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
        },
        message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.',
        required: true,
        minlength: 8, 
    } },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', }],
    resetToken: String,
    resetTokenExpiration: Date,
    isVerified: { type: Boolean, default: false },

}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
