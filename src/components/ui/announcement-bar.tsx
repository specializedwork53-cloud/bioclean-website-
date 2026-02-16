"use client";

export function AnnouncementBar() {
    const messages = [
        "✦ شحن مجاني للطلبات التي تزيد عن 25,000 د.ع ✦",
        "✦ مكونات طبيعية 100% ✦",
        "✦ تم اختباره واعتماده من قبل أطباء الجلدية ✦",
        "✦ نباتي وخالٍ من القسوة ✦",
        "✦ المجموعة الجديدة متوفرة الآن ✦",
    ];

    const repeatedMessages = [...messages, ...messages, ...messages, ...messages];

    return (
        <div className="bg-forest text-ivory overflow-hidden py-2.5 relative z-[51]">
            <div className="animate-marquee flex whitespace-nowrap">
                {repeatedMessages.map((msg, i) => (
                    <span
                        key={i}
                        className="mx-8 text-xs tracking-[0.2em] uppercase font-medium"
                    >
                        {msg}
                    </span>
                ))}
            </div>
        </div>
    );
}
