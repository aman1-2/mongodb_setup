const User = require('../Model/user');

class UserRepository {
    async create(data) {
        try {
            const newUser = await User.create(data);
            return newUser
        } catch (error) {
            console.log("Something went wrong in repository layer.");
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await User.findByIdAndDelete({_id: id});
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer.");
            console.log(error);
        }
    }

    async get(id) {
        try {
            const response = await User.findById(id).lean();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer.");
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const response = await User.find().skip(offset).limit(limit);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer.");
            console.log(error);
        }
    }

    async update(user, data) {
        try {
            const response = await User.findOneAndUpdate(user._id, data, {new: true});
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer.");
            console.log(error);
        }
    }
}

module.exports = UserRepository;