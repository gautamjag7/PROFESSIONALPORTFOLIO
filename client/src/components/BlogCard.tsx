import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  preview: string;
}

export function BlogCard({
  title,
  description,
  date,
  readTime,
  category,
  image,
  preview
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
          </div>
          <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <p className="text-sm">{preview}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
