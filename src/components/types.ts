// interface PostContent {
//     sections: string[];
//     images: string[];
//     // ... other fields as needed
// }

export interface IPost {
    id: number;
    title: string;
    author: string;
    publishDate: string;
    excerpt: string;
    featuredImage: string;
    content: string; // Alternative is to use structured JSON object PostContent. I don't think I'll load insane stuff that needs html/js to be injected? is that the right term?
}

export interface PostPreviewProps {
    post: IPost;
}

export interface Category {
    id: number;
    name: string; 
}

export interface CategoryListProps {
    categories: Category[];
}