"use client";

export function AnnouncementBar() {
    const messages = [
        "✦ Free Shipping on Orders Over 25,000 IQD ✦",
        "✦ 100% Natural Ingredients ✦",
        "✦ Dermatologist Tested & Approved ✦",
        "✦ Cruelty-Free & Vegan ✦",
        "✦ New Collection Available Now ✦",
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
