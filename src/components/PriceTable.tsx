interface PriceItem {
    name: string;
    price: string;
    description?: string;
}

interface PriceTableProps {
    category: string;
    items: PriceItem[];
}

export default function PriceTable({ category, items }: PriceTableProps) {
    return (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-neon-blue mb-6 border-b border-white/10 pb-2 inline-block">
                {category}
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-black/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Service
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {items.map((item, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                    {item.name}
                                    <div className="sm:hidden text-xs text-gray-500 mt-1 font-normal whitespace-normal">
                                        {item.description}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-neon-green">
                                    {item.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
