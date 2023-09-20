import { useForm } from '../hooks/useForm';

interface FormData {
    postal: string,
    ciudad: string
}
export const Formulario2 = () => {
    const { formulario, handleChange } = useForm<FormData>({
        postal: 'ABC',
        ciudad: 'Otawa'
    });

    const {postal, ciudad } = formulario;

    return (
        <form autoComplete='off'>
            <div className='mb-2'>
                <label className='form-label'>Email:</label>
                <input type="email" className='form-control' name="postal" value={ postal } onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <label className='form-label'>Nombre:</label>
                <input type="email" className='form-control' name="ciudad" value={ ciudad } onChange={handleChange} />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
