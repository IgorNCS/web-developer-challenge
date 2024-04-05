import React, { useState, ChangeEvent, useRef } from 'react';
import image from '../../assets/image.png';
import image2x from '../../assets/image@2x.png';
import image3x from '../../assets/image@3x.png';
import trash from '../../assets/trash.png';
import trash2x from '../../assets/trash@2x.png';
import trash3x from '../../assets/trash@3x.png';
import defaultImg from '../../assets/default-user-icon.jpg';
import './PostForm.css';
import { Form, Button } from 'react-bootstrap';

interface FormData {
    name: string;
    message: string;
    image: string | null;
}

interface Post {
    image: string;
    image2x: string;
    image3x: string;
    message: string;
    author: string;
}

interface PostFormProps {
    onAddPost: (post: Post) => void;
}

function PostForm({ onAddPost }: PostFormProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({ name: '', message: '', image: null });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const defaultImage = defaultImg; // Defina a imagem padrão aqui

    const handleDescartarClick = () => {
        setSelectedImage(null);
        setFormData({ name: '', message: '', image: null });
        console.log('Formulário descartado!');
    };

    const handleTrashClick = () => {
        setSelectedImage(null);
        console.log('Clicou na imagem da lixeira!');
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: imageUrl,
            }));
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Verifica se o campo de nome ou mensagem está vazio
        if (!formData.name.trim() || !formData.message.trim()) {
            alert('Por favor, preencha todos os campos.');
            return; // Impede o envio do formulário se algum campo estiver em branco
        }
    
        const newPost: Post = {
            image: formData.image || defaultImage,
            image2x: '', // Defina corretamente se necessário
            image3x: '', // Defina corretamente se necessário
            message: formData.message,
            author: formData.name,
        };
        onAddPost(newPost);
        console.log('Dados a serem enviados:', newPost);
        setFormData({ name: '', message: '', image: null }); // Limpa os campos do formulário
        setSelectedImage(null); // Limpa a imagem selecionada
    };
    

    return (
        <div className="Body">
            <div className="PostCard formContainer mb-3">
                <Form onSubmit={handleSubmit}>
                    <div className="imagePostFormUploaded">
                        {selectedImage ? (
                            <>
                                <img src={selectedImage} alt="Imagem selecionada" className="selectedImage" onClick={handleImageClick} />
                                <span className="trashContainer" onClick={handleTrashClick}>
                                    <img src={trash} srcSet={`${trash2x} 2x, ${trash3x} 3x`} alt="Trash" className="trash" />
                                </span>
                            </>
                        ) : (
                            <label htmlFor="fileInput" className="fileInputLabel">
                                <img src={defaultImage} srcSet={`${image2x} 2x, ${image3x} 3x`} alt="Upload de arquivo" className="fileInputImage" onClick={handleImageClick} />
                                <input type="file" id="fileInput" className="fileInput" onChange={handleFileChange} ref={fileInputRef} />
                            </label>
                        )}
                    </div>
                    <Form.Group controlId="formLogo" className="formGroup">
                        <Form.Control type="text" placeholder="Digite seu nome" className="labelStyle mb-3" name="name" value={formData.name} onChange={handleChange} maxLength={25}/>
                        <Form.Control as="textarea" rows={3} placeholder="Mensagem" className="labelStyle" style={{ resize: 'none' }} name="message" value={formData.message} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formLogo" className="formGroupButtons">
                        <span className="Descartar" onClick={handleDescartarClick}>
                            Descartar
                        </span>
                        <Button variant="primary" type="submit" className="submitButton">
                            <span className="Publicar">Publicar</span>
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default PostForm;
