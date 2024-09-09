interface Props {
      title: any
      listItem: any
}

const FooterMiddleList = ({ title, listItem }: Props) => {
      return (
            <div>
                  <h3 className="font-titleFont text-white text-base font-semibold mb-3">
                        {title}
                  </h3>
                  <ul className="flex flex-col gap-0.5 font-bodyFont">
                        {listItem.map((item: Props) =>
                              //@ts-ignore
                              item.listData.map((data) => (
                                    <li key={data} className="footerLink">
                                          {data}
                                    </li>
                              ))
                        )}
                  </ul>
            </div>
      );
};

export default FooterMiddleList;
