const ToDoItems = ({item, allItems, setItems}) => {
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
                        // console.log('evalue: ',e.target.value)
                        if(e.target.value === 'false')
                        obj.status = 'true'; 
                        else
                        obj.status = 'false';
                    }
                    return obj;
                }))
              }} value={item.status} type="checkbox" name="" id="" />
              {(item.status === 'true') ? <p><s style={{color: 'red'}}>{item.text}</s></p> :
              <p>{item.text}</p>}
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </>
    );
};

export default ToDoItems;
