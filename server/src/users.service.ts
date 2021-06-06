import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user/schemas';
import { CreateUserDto, UpdateUserDto } from './user/dto';

@Injectable()
export class UsersService {
	/**
	 * Creates an instance of UsersService.
	 * @param {Model<UserDocument>} userModel
	 * @memberof UsersService
	 */
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	/**
	 * Create user
	 * @param {CreateUserDto} user
	 * @returns {Promise<User>}
	 * @memberof UsersService
	 */
	create(user: CreateUserDto): Promise<User> {
		const newUser = new this.userModel(user);
		return newUser.save();
	}

	/**
	 * Get user by userId
	 * @param {string} userId
	 * @returns {Promise<User>}
	 * @memberof UsersService
	 */
	getOne(userId: string): Promise<User> {
		return this.userModel.findById(userId).exec();
	}

	/**
	 * Get users
	 * @returns {Promise<User[]>}
	 * @memberof UsersService
	 */
	getAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	/**
	 * Update user
	 * @param {string} userId
	 * @param {UpdateUserDto} userDto
	 * @returns {Promise<User>}
	 * @memberof UsersService
	 */
	update(userId: string, userDto: UpdateUserDto): Promise<User> {
		return this.userModel
			.findByIdAndUpdate(userId, userDto, { new: true })
			.exec();
	}

	/**
	 * Delete user
	 * @param {string} userId
	 * @returns {Promise<User>}
	 * @memberof UsersService
	 */
	delete(userId: string): Promise<User> {
		return this.userModel.findByIdAndRemove(userId).exec();
	}
}
