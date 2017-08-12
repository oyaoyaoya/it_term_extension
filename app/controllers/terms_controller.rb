
class TermsController < ApplicationController
  def new
    @term = Term.new
    @term.samples.build
  end

  def create
    @term = Term.new(term_params)
    if @term.save
      redirect_to new_term_path
    else
      render action: :new
    end
  end

  def index
    respond_to do |format|
      format.html
      format.json do
        keyword = params[:keyword].gsub(/(\r\n|\r|\n)/, "")
        @terms = Term.where("name like '%#{keyword}%'")
        # @samples = []
        # @terms.each do |term|
        #   binding.pry
        #   @samples << term.samples
        # end
      end
    end
  end

  private

  def term_params
    params.require(:term).permit(:name, :description, :url, samples_attributes: [:name, :url])
  end
end
