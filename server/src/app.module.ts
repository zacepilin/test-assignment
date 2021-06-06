import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './user/schemas';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

@Module({
	imports: [
		MongooseModule.forRoot(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
	],
	controllers: [UserController],
	providers: [UsersService],
})
export class AppModule {}
