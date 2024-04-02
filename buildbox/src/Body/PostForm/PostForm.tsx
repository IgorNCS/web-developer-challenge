import React, { useState, ChangeEvent, useRef } from 'react';
import logo from '../../assets/bx-logo.png';
import image from '../../assets/image.png';
import image2x from '../../assets/image@2x.png';
import image3x from '../../assets/image@3x.png';
import trash from '../../assets/trash.png';
import trash2x from '../../assets/trash@2x.png';
import trash3x from '../../assets/trash@3x.png';
import './PostForm.css';
import { Form, Button } from 'react-bootstrap';

interface FormData {
    name: string;
    message: string;
    image: string | null;
}

function PostForm() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({ name: '', message: '', image: null });
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Função para lidar com o clique no "Descartar"
    const handleDescartarClick = () => {
        // Limpar todos os campos do formulário
        setSelectedImage(null);
        setFormData({ name: '', message: '', image: null });
        console.log('Formulário descartado!');
    };

    const handleTrashClick = () => {
        // Lógica para lidar com o clique na imagem da lixeira
        setSelectedImage(null);
        console.log('Clicou na imagem da lixeira!');
    };

    // Função para lidar com a alteração do arquivo selecionado
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const file = fileList[0];

            // Criar URL temporária para a imagem selecionada
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);

            // Atualizar o estado formData com a URL da imagem
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: imageUrl,
            }));

            // Lógica para lidar com o arquivo selecionado
            console.log('Arquivo(s) selecionado(s):', fileList);
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
        console.log('Dados a serem enviados:', formData);
    };

    return (
        <div className="Body">

            <div className="PostCard formContainer mb-3">
                <Form onSubmit={handleSubmit}>
                    <div className="imagePostFormUploaded">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Imagem selecionada" className="selectedImage" onClick={handleImageClick} />
                        ) : (
                            <label htmlFor="fileInput" className="fileInputLabel">
                                <img
                                    src={image}
                                    srcSet={`${image2x} 2x, ${image3x} 3x`}
                                    alt="Upload de arquivo"
                                    className="fileInputImage"
                                    onClick={handleImageClick}
                                />
                                <input type="file" id="fileInput" className="fileInput" onChange={handleFileChange} ref={fileInputRef} />
                            </label>
                        )}
                        <span className="trashContainer" onClick={handleTrashClick}>
                            <img
                                src={trash}
                                srcSet={`${trash2x} 2x, ${trash3x} 3x`}
                                alt="Trash"
                                className="trash"
                            />
                        </span>
                    </div>
                    <Form.Group controlId="formLogo" className="formGroup">
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            className="labelStyle mb-3"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Mensagem"
                            className="labelStyle"
                            style={{ resize: 'none' }}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
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
