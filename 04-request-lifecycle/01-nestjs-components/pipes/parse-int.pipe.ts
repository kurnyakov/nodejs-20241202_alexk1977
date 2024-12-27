import { BadRequestException, PipeTransform } from "@nestjs/common";

export class ParseIntPipe implements PipeTransform {
  transform(value: string): number {
    const result = parseInt(value, 10);
    if (isNaN(result)) throw new BadRequestException(`\"${value}\" не является числом`);
    return result;
  }
}
