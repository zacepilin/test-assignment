import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
} from '@nestjs/common';
import { User } from './schemas';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersService } from '../users.service';

@Controller('user')
export class UserController {
	constructor(readonly usersService: UsersService) {}

	@Post()
	create(@Body() user: CreateUserDto): Promise<User> {
		return this.usersService.create(user);
	}

	@Get(':id')
	getOne(@Param('id') userId: string): Promise<User> {
		return this.usersService.getOne(userId);
	}

	@Get()
	getAll(): Promise<User[]> {
		return this.usersService.getAll();
	}

	@Put(':id')
	update(
		@Body() user: UpdateUserDto,
		@Param('id') userId: string,
	): Promise<User> {
		return this.usersService.update(userId, user);
	}

	@Delete(':id')
	delete(@Param('id') userId: string): Promise<User> {
		return this.usersService.delete(userId);
	}
}
