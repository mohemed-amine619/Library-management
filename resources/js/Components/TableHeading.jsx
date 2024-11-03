export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortedChange = () => {},
    children
    }) {
    return (
            <th
                 onClick={(e) => sortedChange(name)}
                 className="px-3 py-3 ">
                    {sortable && (
                        <div className="flex items-center justify-between gap-1 cursor-pointer">{children}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"size-4 w- 4 " + (sort_field === name && sort_direction === "asc" ? "text-white" : " ")}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"size-4 w- 4 -mt-2 " + (sort_field === name && sort_direction === "desc" ? "text-white" : " ")}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                      </div>
                    )}  
            </th>
    )
}