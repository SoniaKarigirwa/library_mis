import React, { useEffect, useState } from "react";
import { AuthApi } from '../api-services/axios.config';
import Search from "./Search";
import TableList from './Table';
import './BookList.css';
import Logout from "../Logout/Logout";

const BookList = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getAllBooks = async () => {
        try {
            const response = await AuthApi.get('/books');
            console.log('res', response)
            setData(response?.data ?? []);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        getAllBooks();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter(book =>
        Object.values(book).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="container">
            <div className="book-list-header">
                <div className="book-list">
                    <h1>LMS</h1>
                    <p>All books available in the system</p>
                </div>
                <div>
                    <Logout />
                </div>
            </div>
            <div className="all-books">
                <div className="all-books-header">
                    <div>
                        <h3>All Books</h3>
                    </div>
                    <div>
                        <Search searchQuery={searchQuery} handleSearch={handleSearch} />
                    </div>
                </div>
                <TableList data={filteredData} />
            </div>
        </div>
    );
};

export default BookList;