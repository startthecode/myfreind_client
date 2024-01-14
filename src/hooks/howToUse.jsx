export const howToUse = () => {
  return (
    <>
      {/* <SlideUpMenu>
        <SlideUpMenu.Open whichPopUp="Feed">
          <div>aaa</div>
        </SlideUpMenu.Open>

        <SlideUpMenu.PopUp popUpName="Feed">
      
                  <Button>heelo world outer</Button>

        </SlideUpMenu.PopUp>
 
      </SlideUpMenu> */}

      <DropDownMenu>
        <DropDownMenu.Open whichDropDown="followingList">
          <div className="bg-red-500 py-3 cursor-pointer">open1</div>
        </DropDownMenu.Open>
        <DropDownMenu.DropDown dropDownName="followingList">
          <button>Inner</button>
        </DropDownMenu.DropDown>

        <div className="mt-[100px]">
          <DropDownMenu.Open whichDropDown="followingList1">
            <div className="bg-red-500 py-9 cursor-pointer">open1</div>
          </DropDownMenu.Open>
          <DropDownMenu.DropDown dropDownName="followingList1">
            <button>Inner2</button>
          </DropDownMenu.DropDown>
        </div>
      </DropDownMenu>
    </>
  );
};
