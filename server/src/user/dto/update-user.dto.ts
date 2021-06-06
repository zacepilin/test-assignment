export class UpdateUserDto {
	constructor(
		readonly username?: string,
		readonly password?: string,
		readonly countryId?: number,
	) {}
}
