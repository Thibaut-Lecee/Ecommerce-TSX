import axios from "axios";
import toast from "react-hot-toast";

export const postProduct = async (title: string, price: number, description : string, image: string, category: string) => {
    try {
        const sendData = await axios.post('https://fakestoreapi.com/products', {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category
        })
        console.log(sendData);
        if(sendData.status === 200 || sendData.status === 201) {
            console.log('Success');
            toast.success('Product added successfully');
            return sendData;
        }
    } catch (error) {
        console.error(error);
    }
}