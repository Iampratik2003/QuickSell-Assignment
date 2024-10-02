import './Navbar.css'
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
import DownArrow from '../../icons_FEtask/down.svg'
import Display from '../../icons_FEtask/Display.svg'

const groupOptions = [
    {
        label: "Status",
        value: "status",
    },
    {
        label: "User",
        value: "user",
    },
    {
        label: "Priority",
        value: "priority",
    }];
const orderOptions = [
    {
        label: "Priority",
        value: "priority",
    },
    {
        label: "Title",
        value: "title",
    }];

const Navbar = ({ group, order, onGroupchange, onOrderChange }) => {
    const [expandMore, setExpandMore] = useState(false);
    const [groupedBy, setGroupedBy] = useState(group);
    const [orderedBy, setOrderedBy] = useState(order);
    const dropdownRef = useRef(null);  // Ref to the dropdown element

    const handleGroupChange = (e) => {
        setGroupedBy(e.target.value);
        onGroupchange(e.target.value);
    }

    const handleOrderChange = (e) => {
        setOrderedBy(e.target.value);
        onOrderChange(e.target.value);
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setExpandMore(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='nav'>
            <div
                className='expand_btn'
                onClick={() => { setExpandMore(prev => !prev) }}
            >
                <img src={Display} alt="" width={15} height={15}/>
                <span >Display</span>
                <img src={DownArrow} alt="" width={15} height={15}/>
            </div>
            {expandMore && (
                <div className="dropdown" ref={dropdownRef}>  {/* Attach ref to dropdown */}
                    <div className='display'>
                        <p>Grouping</p>
                        <select
                            name="group"
                            id="groupBy"
                            defaultValue={group}
                            onChange={handleGroupChange}>
                            {groupOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='display'>
                        <p>Ordering</p>
                        <select
                            name="order"
                            id="orderBy"
                            defaultValue={order}
                            onChange={handleOrderChange}
                        >
                            {orderOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
