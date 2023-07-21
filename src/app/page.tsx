'use client'
import { useState } from "react";
import Image from 'next/image';
import Input from './components/input';

export default function Home() {
    const [form, setForm] = useState({
        name: '',
        height: {
            feet: '',
            inch: ''
        },
        religion: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const nameInput = {
        label: "Name",
        id: "name",
        name: "name",
        value: form.name,
        placeholder: "Name",
        changeHandler: onChangeHandler
    }

    const heightFeetInput = {
        label: "Height(Feet)",
        id: "height",
        name: "height",
        value: form.height.feet,
        placeholder: "Feet",
        changeHandler: onChangeHandler
    }
    const heightInchInput = {
        label: "Height(Inch)",
        id: "height",
        name: "height",
        value: form.height.inch,
        placeholder: "Inch",
        changeHandler: onChangeHandler
    }
    const religionInput = {
        label: "religion",
        id: "religion",
        name: "religion",
        value: form.religion,
        placeholder: "Relagion",
        onChangeHandler: onChangeHandler
    }

    return (
        <>
            <div className="container m-auto p-auto">

                <form method="" id="" action="" className='m-auto p-auto space-y-4 w-full'>
                    <Input {...nameInput} />
                    <Input {...heightFeetInput} />
                    <Input {...heightInchInput} />
                    <Input {...religionInput} />
                </form>

            </div>
        </>
    )
}
