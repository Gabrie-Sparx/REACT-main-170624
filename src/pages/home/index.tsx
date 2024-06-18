import {Link} from 'react-router-dom'
import Layout from '../../components/layout'

export default function Home() {
    return (
        <Layout>
        <>
            <h1>Breve apresentação do projeto</h1>
            <hr />
            <p>Página desenvolvida para apresentacao de implementações das aulas de LPAR II.
            </p>
            <hr />
            <Link to="/sobre">Sobre</Link><br />
            <Link to="/contato">Contato</Link><br />
            <Link to="/tarefas">Tarefas</Link><br />
        </>
        </Layout>
    )
}