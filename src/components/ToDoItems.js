const ToDoItems = ({item, allItems, setItems}) => {
    const handleDelete = () => {
        console.log('delete: ', item.id);
        const updatedItems = allItems.filter((obj) => obj.id !== item.id);
        setItems(updatedItems);
      };
//   console.log('props: ', props?.toDoList);
//   console.log('props: ', item);
    return (
      <>
        <div className="todos">
          <div className="todo">
            <div className="left">
              <input onChange={(e) => {
                console.log(e);
                setItems(allItems.filter((obj) => {
                    if(obj.id === item.id) {
                        // if(e.target.value === 'false')
                        // obj.status = 'true'; 
                        // else
                        // obj.status = 'false';
                        obj.status = e.target.checked;
                    }
                    return obj;
                }))
              }} value={item.status} type="checkbox" name="" id="" />
              {(item.status) ? <p><s style={{color: 'red'}}>{item.text}</s></p> :
              <p>{item.text}</p>}
            </div>
            <div className="right">
            <i onClick={handleDelete} className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </>
    );
};

export default ToDoItems;
