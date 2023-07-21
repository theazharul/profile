'use client'
import { useState } from "react";
import Image from 'next/image';
import Input from './components/input';

export default function Home() {
    const [form, setForm] = useState({
        name: '',
        height: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const nameInput = {
        label: "name",
        type: "text",
        id: "name",
        name: "name",
        value: form.name,
        placeholder: "Name",
        changeHandler: onChangeHandler
    }

    const heightInput = {
        label: "height",
        type: "text",
        id: "height",
        name: "height",
        value: form.height,
        placeholder: "Height",
        changeHandler: onChangeHandler
    }

    return (
        <>
            <form method="" id="" action="" className='m-auto p-auto space-y-4 w-full'>
                <Input {...nameInput} />
                <Input {...heightInput} />
            </form>
        </>
    )
}
