import { Card, CardContent, CardHeader } from "../ui/card"

export interface CardMultiProps {
    title: string,
    items: {
        period: string,
        title: string,
        description: string,
    }[]
};

const CardMulti = ({ title, items }: CardMultiProps) => {
  return (
    <Card className="bg-card-bg-dark rounded-3xl border border-gray-800 text-left h-full">
        <CardHeader className="text-white font-medium text-3xl uppercase">
            {title}
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <p className="text-gray-500 text-sm font-medium mb-2">{item.period}</p>
                    <h1 className="text-white text-lg font-medium">{item.title}</h1>
                    <p className="text-gray-500 text-">{item.description}</p>
                </div>
            ))}
        </CardContent>
    </Card>
  )
}

export default CardMulti