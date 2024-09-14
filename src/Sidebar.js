import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRegistros, setShowRegistros] = useState(false); // Estado para mostrar/ocultar submenú de Registros

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleRegistros = () => {
        setShowRegistros(!showRegistros);
    };

    return (
        <>
            {/* Botón de hamburguesa para abrir/cerrar el menú en pantallas pequeñas */}
            <button
                className="btn btn-dark d-md-none m-3"
                onClick={toggleSidebar}
            >
                <i className="bi bi-list"></i>
            </button>

            {/* Menú lateral */}
            <div
                className={`bg-dark text-white vh-100 p-3 d-flex flex-column ${isOpen ? 'd-block' : 'd-none'} d-md-block`}
                style={{ minWidth: '225px' }}
            >
                <h4 className="text-white">MiraLago</h4>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="/home" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-house-door-fill me-2"></i>
                            <span>Home</span>
                        </Link>
                    </li>

                    {/* Opción Registros */}
                    <li className="nav-item mb-2">
                        <button
                            className="btn btn-link nav-link text-white d-flex align-items-center"
                            onClick={toggleRegistros}
                        >
                            <i className="bi bi bi-person-rolodex me-2"></i>
                            <span className="me-3">Usuarios</span> {}
                            <i className={`bi ms-auto ${showRegistros ?  'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                        </button>

                        {/* Submenú  */}
                        {showRegistros && (
                            <ul className="nav flex-column ms-3">
                                <li className="nav-item mb-2">
                                    <Link to="/usuario" className="nav-link text-white d-flex align-items-center">
                                        <i className="bi bi-person-fill me-2"></i>
                                        <span>Usuario</span>
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/empleado" className="nav-link text-white d-flex align-items-center">
                                        <i className="bi bi-person-badge-fill me-2"></i>
                                        <span>Empleado</span>
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/reporteuser" className="nav-link text-white d-flex align-items-center">
                                        <i className="bi bi-person-lines-fill me-2"></i>
                                        <span>Reporte Usuarios</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="nav-item mb-2">
                        <Link to="/ajustes" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-gear-fill me-2"></i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/logout" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-box-arrow-left me-2"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
