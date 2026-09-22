export function formatChatDate(date: Date): string {
    const now = new Date();

    const isToday =
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();

    if (isToday) {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const isYesterday =
        date.getFullYear() === yesterday.getFullYear() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getDate() === yesterday.getDate();

    // if (isYesterday) {
    //     return `Y ${date.toLocaleTimeString([], {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //     })}`;
    // }

    return `${String(date.getDate()).padStart(2, '0')}.${String(
        date.getMonth() + 1
    ).padStart(2, '0')}`;
}