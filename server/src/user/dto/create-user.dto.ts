export class CreateUserDto {
	constructor(
		readonly firstName: string,
		readonly surname: string,
		readonly email: string,
	) {}
}
