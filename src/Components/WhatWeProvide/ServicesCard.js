const ServicesCard = () => {
    const services = [
        {
            id: 1,
            category: "Safety and Legality",
            description: "Legal and safe services compliant with game terms of service."
        },
        {
            id: 2,
            category: "Gamer Community Benefits",
            description: "Rewards, discounts, and partnerships with gaming communities."
        },
        {
            id: 3,
            category: "Guarantees and Refund Policy",
            description: "Transparent refund policy and customer satisfaction guarantee."
        },
        {
            id: 4,
            category: "Customer Support",
            description: "24/7 support via email, live chat, and phone. Multilingual support available."
        },
        {
            id: 5,
            category: "Competitive Prices",
            description: "Competitive pricing and bulk purchase discounts."
        },
        {
            id: 6,
            category: "Fast and Secure Transactions",
            description: "Quick and secure transactions with encryption and data protection."
        }
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 my-3">
            {
                services.map(service =>
                    <div key={service.id} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{service.category}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default ServicesCard;