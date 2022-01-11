import { declOfNum } from './declOfNumVal';

/**
 * Сообщает пользователю сколько прошло времени.
 * Например, время последней активности, размещения поста.
 **/
export const getLongAgoString = (date: Date) => {
	const currentDate = new Date()
	let diff = null
	if (date.getFullYear() !== currentDate.getFullYear()) {
		diff = currentDate.getFullYear() - date.getFullYear()
		return `${diff} ${declOfNum(diff, ['год', 'года', 'лет'])} назад`
	} if (date.getMonth() !== currentDate.getMonth()) {
		diff = currentDate.getMonth() - date.getMonth()
		return `${diff} ${declOfNum(diff, ['месяц', 'месяца', 'месяцев'])} назад`
	} if (date.getDate() !== currentDate.getDate()) {
		diff = currentDate.getDate() - date.getDate()
		return `${diff} ${declOfNum(diff, ['день', 'дня', 'дней'])} назад`
	} if (date.getHours() !== currentDate.getHours()) {
		diff = currentDate.getHours() - date.getHours()
		return `${diff} ${declOfNum(diff, ['час', 'часа', 'часов'])} назад`
	} if (date.getMinutes() !== currentDate.getMinutes()) {
		diff = currentDate.getMinutes() - date.getMinutes()
		return `${diff} ${declOfNum(diff, ['минута', 'минуты', 'минут'])} назад`
	} return 'только что'
}
