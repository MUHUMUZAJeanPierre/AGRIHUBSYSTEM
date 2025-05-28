import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { VscLoading } from "react-icons/vsc";

const FirstPage = () => {

    const [buyers, setBuyers] = useState([]);
    const [farmers, setFarmers] = useState([]);
    const [stock, setStock] = useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //   Fetcing total farmers 

    useEffect(() => {
        const fetchTotalFarmers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalFarmer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    //   throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data); // Debug log

                if (data && typeof data.farmers === 'number') {
                    setBuyers(data.farmers);
                } else {
                    //   console.error('Unexpected data structure:', data); // Debug log
                    //   throw new Error('Response data does not contain expected farmers array');
                }
            } catch (error) {
                console.error('Error fetching farmers:', error); // Debug log
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        const fetchTotalBuyers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalBuyer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (buyers):', data);

                if (data && typeof data.buyers === 'number') {
                    setBuyers(data.buyers);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalStock = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalStock', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (stock):', data);

                if (data && typeof data.stocks === 'number') {
                    setStock(data.stocks);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalOrder', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    // throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (orders):', data);

                if (data && typeof data.orders === 'number') {
                    setOrders(data.orders);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTotalUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError('No token found, please log in');
                    setLoading(false);
                    return;
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalUsers', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error(`Unexpected response format: ${contentType}`);
                }

                const data = await response.json();
                console.log('Fetched data (users):', data);

                if (data && typeof data.users === 'number') {
                    setUsers(data.users);
                } else {
                    // console.error('Unexpected data structure:', data);
                    // throw new Error('Response data does not contain expected buyers count');
                }
            } catch (error) {
                console.error('Error fetching buyers:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // for BARCHART 
        fetchTotalFarmers();
        fetchTotalBuyers();

        // for PIE CHART 
        fetchTotalStock();
        fetchTotalOrders();
        fetchTotalUsers();
    }, []);


    if (loading) {
        return (
            <>
                <div className='relative'>
                    <img src='../harvest5.jpg' className='h-[30vh] w-full object-cover'></img>
                    <div className='absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>Admin Dashboard</b></p>
                    </div>
                </div>
                <div className='pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold'>
                    <VscLoading className='animate-spin' />
                    <p>Loading</p>
                </div>
            </>
        )
    };

    if (error) {
        // return <div>Error: {error}</div>
    };

    // BARCHART data 

    const data = [
        {
            name: 'Farmers',
            count: farmers

        },
        {
            name: 'Buyers',
            count: buyers

        },
    ];

    // PIECHART data 

    const PieData = [
        { name: 'Users', value: users },
        { name: 'Stocks', value: stock },
        { name: 'Orders', value: orders },
    ]
    const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

    // Received orders 

    const RecentOrderData = [
        {
            id: '1',
            product_id: '3661',
            customer_id: '941',
            customer_name: 'Nancy H.',
            order_date: '12-5-2024 11:58 AM',
            order_total: 'RWF 2,224',
            order_status: 'PLACED',
            shippment_address: 'Nyarugenge KN 674 ST'

        },
        {
            id: '2',
            product_id: '974',
            customer_id: '937',
            customer_name: 'Albertine I.',
            order_date: '5-13-2024 1:05 PM',
            order_total: 'RWF 1,654',
            order_status: 'CONFIRMED',
            shippment_address: 'Nyarugenge KN 974 ST'

        },
        {
            id: '3',
            product_id: '61',
            customer_id: '91',
            customer_name: 'Magnifique I.',
            order_date: '4-22-2023 7:46 AM',
            order_total: 'RWF 2,004',
            order_status: 'SHIPPED',
            shippment_address: 'Gasabo KG 674 AV'

        },
        {
            id: '4',
            product_id: '974',
            customer_id: '41',
            customer_name: 'Ruth.',
            order_date: '1-30-2024 19:28 PM',
            order_total: 'RWF 90,147',
            order_status: 'SHIPPED',
            shippment_address: 'Kicukiro KK 9 ST'

        },
        {
            id: '5',
            product_id: '908',
            customer_id: '9',
            customer_name: 'Bega G.',
            order_date: '2-2-2024 12:58  PM',
            order_total: 'RWF 62,224',
            order_status: 'PLACED',
            shippment_address: 'Gasabo KG 74 ST'

        },
    ]

    const PopularProduct = [
        {
            id: '10',
            product_name: 'Rice',
            product_price: 'RWF 193,489/1t'
        },
        {
            id: '11',
            product_name: 'Maize',
            product_price: 'RWF 321,489 /1t'
        },
        {
            id: '12',
            product_name: 'beans',
            product_price: 'RWF 128`,489 /1t'
        },
    ]

    return (
        <>
            <div className=''>
                <div className='relative'>
                    <img src='../harvest5.jpg' className='h-[30vh] w-full object-cover'></img>
                    <div className='absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>Admin Dashboard</b></p>
                    </div>
                </div>
                <div className='flex gap-10 pt-10 px-5'>
                    <div className='px-5 py-5 rounded-sm bg-[#f2f2f2] h-[64vh]'>
                        <div>
                            <strong className=''>General Statistics</strong>
                        </div>
                        <div className='h-[20rem] '>
                            <div className='w-full mt-3 flex flex-col'>
                                <BarChart width={600} height={300} data={data}>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="users" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#269553" name="Farmers" />
                                    <Bar dataKey="count" fill="#B3C860" name="Buyers" />
                                </BarChart>
                            </div>
                        </div>
                    </div>
                    <div className='w-[59h]'>
                        <div className='bg-[#f2f2f2]'>
                            <PieChart width={300} height={300}>
                                <Pie
                                    dataKey="value"
                                    data={PieData}
                                    cx="50%"
                                    cy="50%"
                                    fill="#8884d8"
                                    label
                                >
                                    {PieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>


                        <div className='bg-[#f2f2f2] mt-2 h-[21vh] p-4'>
                            <strong className=''>Transactions</strong>
                            <div className='flex mt-2 text-[#B3C860] text-center'>
                                <div className='bg-[#269553] rounded-lg w-[20vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>93%</strong>
                                    <p>Successful</p>
                                </div>
                                <div className='bg-[#269553] rounded-lg ml-3 w-[14vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>4%</strong>
                                    <p>Canceled</p>
                                </div>
                                <div className='bg-[#269553] rounded-lg ml-3 w-[14vh] h-[12vh] p-2'>
                                    <strong className='text-4xl'>1%</strong>
                                    <p>Failed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RECENT ORDERS PLACED  */}
                
                <div className='flex gap-10 mt-10 px-5'>
                    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5'>
                        <strong>Reccent order</strong>
                        <div className='mt-3'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-slate-100'>
                                        <td className='p-2'>ID</td>
                                        <td>Product Id</td>
                                        <td>Customer name</td>
                                        <td>Order date</td>
                                        <td>Order total</td>
                                        <td>Shipping address</td>
                                        <td>Order status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RecentOrderData.map((order) =>
                                        <tr key={order.id}>
                                            <td className='p-2 pr-5'>
                                                <Link to={`/order/${order.id}`} className=' text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>#{order.id}</Link>
                                            </td>
                                            <td>
                                                <Link to={`/product/${order.product_id}`} className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.product_id}</Link>
                                            </td>
                                            <td>
                                                <Link to={`/customer/${order.customer_name}`} className='text-cyan-600 hover:text-blue-800 hover:underline hover:underline-offset-2'>{order.customer_name}</Link>
                                            </td>
                                            <td>{order.order_date}</td>
                                            <td>{order.order_total}</td>
                                            <td>{order.shippment_address}</td>
                                            <td>{order.order_status}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
                        <div>
                            <strong>Popular products</strong>
                        </div>
                        <div>
                            <div>

                                <div className='flex  flex-wrap gap-3 pt-5 p-3'>
                                    {PopularProduct.map((order) =>
                                        <p key={order.id}>
                                            <p>{`Product id: ${order.id}`}</p>
                                            <p>
                                                <p>{`Product name: ${order.product_name}`}</p>
                                            </p>
                                            <p>{`Product price: ${order.product_price}`}</p>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FirstPage