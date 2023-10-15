"use client"

import { useRouter } from "next/navigation";



const CardDetails = ({ params }) => {
    const gamingCurrencyInformation = [
        {
            id: 1,
            gameName: "PUBG MOBILE",
            poster: "https://images.hindustantimes.com/tech/img/2021/03/26/960x540/EU1qWl6WAAACTXB_1616739232074_1616739240732.jpg",
            currencyName: "Unknown Cash",
            currencySymbol: "UC",
            packages: [
                { id: 101, packageName: "Starter Pack", price: 4.99, quantity: 500 },
                { id: 102, packageName: "Bronze Pack", price: 9.99, quantity: 1100 },
                { id: 103, packageName: "Silver Pack", price: 19.99, quantity: 2300 },
                { id: 104, packageName: "Gold Pack", price: 49.99, quantity: 6000 }
            ]
        },
        {
            id: 2,
            gameName: "PUBG MOBILE LITE",
            currencyName: "Battle Coins",
            poster: "https://wallpapers.com/images/hd/pubg-pictures-o3eqzdeil2265vdj.jpg",
            currencySymbol: "BC",
            packages: [
                { id: 201, packageName: "Starter Pack", price: 2.99, quantity: 300 },
                { id: 202, packageName: "Bronze Pack", price: 7.99, quantity: 800 },
                { id: 203, packageName: "Silver Pack", price: 14.99, quantity: 1600 },
                { id: 204, packageName: "Gold Pack", price: 29.99, quantity: 3500 }
            ]
        },
        {
            id: 3,
            gameName: "Call of Duty: Mobile",
            poster: "https://gamingonphone.com/wp-content/uploads/2022/02/Call-of-Duty-Mobile-game-cover-1.jpg",
            currencyName: "COD Points",
            currencySymbol: "CP",
            packages: [
                { id: 301, packageName: "Starter Pack", price: 4.99, quantity: 500 },
                { id: 302, packageName: "Bronze Pack", price: 9.99, quantity: 1100 },
                { id: 303, packageName: "Silver Pack", price: 19.99, quantity: 2300 },
                { id: 304, packageName: "Gold Pack", price: 49.99, quantity: 6000 }
            ]
        },
        {
            id: 4,
            gameName: "Free Fire",
            poster: "https://images.hindustantimes.com/tech/img/2023/10/08/960x540/526ab8efaf60be59ccf03e314e019a3a_1671931798562_1696729649579.jpg",
            currencyName: "Diamonds",
            currencySymbol: "D",
            packages: [
                { id: 401, packageName: "Starter Pack", price: 4.99, quantity: 100 },
                { id: 402, packageName: "Bronze Pack", price: 9.99, quantity: 210 },
                { id: 403, packageName: "Silver Pack", price: 19.99, quantity: 520 },
                { id: 404, packageName: "Gold Pack", price: 49.99, quantity: 1360 }
            ]
        },
        {
            id: 5,
            gameName: "eFootball 2023",
            poster: "https://images.gamesxtreme.com/uploads/large/75/74/7574/efootball-2023-800x450_jpg.jpg",
            currencyName: "eCoins",
            currencySymbol: "EC",
            packages: [
                { id: 501, packageName: "Starter Pack", price: 2.99, quantity: 300 },
                { id: 502, packageName: "Bronze Pack", price: 7.99, quantity: 800 },
                { id: 503, packageName: "Silver Pack", price: 14.99, quantity: 1600 },
                { id: 504, packageName: "Gold Pack", price: 29.99, quantity: 3500 }
            ]
        },
        {
            id: 6,
            gameName: "Dream League Soccer",
            poster: "https://games.lol/wp-content/uploads/2022/07/dream-league-soccer-pc-download-1024x572.jpg",
            currencyName: "Coins",
            currencySymbol: "C",
            packages: [
                { id: 601, packageName: "Starter Pack", price: 1.99, quantity: 500 },
                { id: 602, packageName: "Bronze Pack", price: 4.99, quantity: 1200 },
                { id: 603, packageName: "Silver Pack", price: 9.99, quantity: 2500 },
                { id: 604, packageName: "Gold Pack", price: 19.99, quantity: 5500 }
            ]
        }
    ];

    const findData = gamingCurrencyInformation.find(info => info.id === parseInt(params.id));

    const { gameName, currencySymbol, poster } = findData;

    const router = useRouter();

    const handelPackages = (packageId) =>{
        router.push('/successful');
    }

    return (
        <div className="my-10 px-5">
            {findData && (
                <div className="lg:flex gap-10">
                    <figure className="w-full lg:w-1/2 lg:border-2 border-black p-5 rounded-xl"><img src={poster} alt="Shoes" /></figure>
                    <div className="w-full lg:w-1/2 lg:border-2 border-black p-5 rounded-xl">
                        <h2 className="text-2xl font-bold">{gameName} {currencySymbol} Packages</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                            {findData.packages.map(packageItem => (
                                <button onClick={()=> handelPackages(packageItem.id)} className="bg-[#4999DE] rounded-md mx-auto text-white font-bold py-10 px-5 w-full" key={packageItem.id}>
                                    <div className="relative">
                                        <p>{packageItem.quantity} {currencySymbol}</p>
                                        <p className="absolute -top-5 right-0">${packageItem.price}</p>
                                    </div>

                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardDetails;