class TermsController < ApplicationController
  def new
    Term.find(1)
    @term = Term.new
    @term.samples.build
  end

  def create
    Term.find(1)
    @term = Term.new(name: params[:name], description: params[:description])
    if @term.save
      redirect_to "terms/new"
    else
      render action => :new
    end
  end

  def index
    respond_to do |format|
      format.html
      format.json do
        keyword = params[:keyword].gsub(/(\r\n|\r|\n)/, "")
        @terms = Term.where("name like ?", keyword)
        # @samples = []
        # @terms.each do |term|
        #   binding.pry
        #   @samples << term.samples
        # end
      end
    end
  end

  private
end
